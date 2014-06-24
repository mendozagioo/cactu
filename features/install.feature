@disable-bundler
Feature: Install cactu files

  Scenario: Cactu generates a new cactu installation
    When I run `bundle exec cactu install`
    Then the sass directories should have been generated
    And the following directories should exist:
      | cactu     |
    And the master cactu partial should have been generated
    And the output should contain "Cactu files installed to cactu/"

  Scenario: Generating does not overwrite an existing cactu directory
    Given cactu is already installed
    When I run `bundle exec cactu install`
    Then the output should contain "Cactu files already installed, doing nothing."

  Scenario: Install Cactu into a custom path
    When I run `bundle exec cactu install --path=custom_path`
    Then the sass directories with "custom_path" prefix should have been generated
    And the following directories should exist:
      | custom_path/cactu     |
    And the master cactu partial should have been generated within "custom_path" directory
    And the output should contain "Cactu files installed to custom_path/cactu/"

  Scenario: Forcing install of cactu
    Given cactu is already installed
    When I run `bundle exec cactu install --force`
    Then the output from "bundle exec cactu install --force" should contain "Cactu files installed to cactu/"
    And the output should not contain "Cactu files already installed, doing nothing."
