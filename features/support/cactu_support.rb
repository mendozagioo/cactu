module CactuSupport
  def install_cactu(path = nil)
    if path
      run_simple("bundle exec cactu install --path '#{path}'")
    else
      run_simple("bundle exec cactu install")
    end
  end

  def cactu_path(prefix, path)
    if prefix
      File.join(prefix, 'cactu', path)
    else
      File.join('cactu', path)
    end
  end
end
