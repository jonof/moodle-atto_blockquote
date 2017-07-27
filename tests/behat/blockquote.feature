@editor @editor_atto @atto @atto_blockquote @_bug_phantomjs
Feature: Atto blockquote button
  To format text in Atto, I need to use the blockquote button.

  @javascript
  Scenario: Block quote some text
    Given I log in as "admin"
    And I open my profile in edit mode
    And I set the field "Description" to "Badger"
    And I select the text in the "Description" Atto editor
    When I click on "Block quote" "button"
    And I press "Update profile"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the field "Text editor" to "Plain text area"
    And I press "Save changes"
    And I click on "Edit profile" "link" in the "region-main" "region"
    Then I should see "<blockquote>Badger</blockquote>"
