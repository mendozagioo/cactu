@disable-bundler
Feature: Update cactu files

  Scenario: Updating updates an existing cactu install
    Given cactu is already installed
    When I write to "cactu/_cactu.scss" with:
      """
      foobar
      """
    And I run `bundle exec cactu update`
    Then the output should contain "Cactu files updated."
    And the file "cactu/_cactu.scss" should not contain "foobar"

  Scenario: Updating with a --path option
    Given I install cactu to "custom_path"
    When I write to "custom_path/cactu/_cactu.scss" with:
      """
      foobar
      """
    And I run `bundle exec cactu update`
    Then the output should contain "No existing cactu installation. Doing nothing."

    When I run `bundle exec cactu update --path custom_path`
    Then the output should contain "Cactu files updated."
    And the file "custom_path/cactu/_cactu.scss" should not contain "foobar"

  Scenario: Updating does not generate a new cactu install
    And I run `bundle exec cactu update`
    Then cactu should not have been generated
    And the output should contain "No existing cactu installation. Doing nothing."
