require 'cactu/version'
require "fileutils"
require 'thor'

module Cactu
  class Generator < Thor
    map ['-v', '--version'] => :version

    desc 'install', 'Install Cactu into your project'
    method_options :path => :string, :force => :boolean
    def install
      if cactu_files_already_exist? && !options[:force]
        puts "Cactu files already installed, doing nothing."
      else
        install_files
        puts "Cactu files installed to #{install_path}/"
      end
    end

    desc 'update', 'Update Cactu'
    method_options :path => :string
    def update
      if cactu_files_already_exist?
        remove_cactu_directory
        install_files
        puts "Cactu files updated."
      else
        puts "No existing cactu installation. Doing nothing."
      end
    end

    desc 'version', 'Show Cactu version'
    def version
      say "Cactu #{Cactu::VERSION}"
    end

    private

    def cactu_files_already_exist?
      install_path.exist?
    end

    def install_path
      @install_path ||= if options[:path]
          Pathname.new(File.join(options[:path], 'cactu'))
        else
          Pathname.new('cactu')
        end
    end

    def install_files
      make_install_directory
      copy_in_scss_files
    end

    def remove_cactu_directory
      FileUtils.rm_rf("cactu")
    end

    def make_install_directory
      FileUtils.mkdir_p(install_path)
    end

    def copy_in_scss_files
      FileUtils.cp_r(all_stylesheets, install_path)
    end

    def all_stylesheets
      Dir["#{stylesheets_directory}/*"]
    end

    def stylesheets_directory
      File.join(top_level_directory, "app", "assets", "stylesheets")
    end

    def top_level_directory
      File.dirname(File.dirname(File.dirname(__FILE__)))
    end
  end
end
