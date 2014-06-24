Given /^cactu is already installed$/ do
  install_cactu
end

Given /^I install cactu to "([^"]*)"$/ do |path|
end

Then /^the sass directories(?: with "([^"]+)" prefix)? should have been generated$/ do |prefix|
  sass_directories = ["addons", "css3", "functions"]
  sass_directories.map!{ |directory| cactu_path(prefix, directory) }
  check_directory_presence(sass_directories, true)
end

Then /^the master cactu partial should have been generated(?: within "([^"]+)" directory)?$/ do |prefix|
  check_file_presence([cactu_path(prefix, '_cactu.scss')], true)
end

Then /^cactu should not have been generated$/ do
  check_directory_presence(['cactu'], false)
end

Then /^the output should contain the current version of Cactu$/ do
  step %(the output should contain exactly "Cactu #{Bourbon::VERSION}\n")
end
