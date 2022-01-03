# DynamicRecordAction
The Dynamic Record Action LWC was inspired by a component that i've levered several times in the past called _The Record Detail Component._

## Goals with this Component:
1. Create a quick, admin confurable way to edit or view data on a lightning record page that is object agnostic. 
2. Give admins control of core functions not available with standard quick actions such as (form density, set fields quickly to read only or read write, set custom titles, control custom toast messaging service) 
3. Allow for Admins to enter a commma separated list of API names into a property and parse those values into an ordered list to be displayed on the quick action. 

## Other Notes:
Because this component leverages the _Lightning-Record-Form component_ it has the same limitations: https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form/documentation

## How to set up Dynamic Record Action Component:

1. Go to your desired lightning record page and edit the page (note, you do not have to do this from the front end, you can navigate to your desired lightning page from the object manager as well): ![image](https://user-images.githubusercontent.com/58155079/147894172-d6945928-7596-4a30-abdc-794a9352eda6.png)

2. Once your lightning app builder screen has loaded search for 'Dynamic Record Action Component' on the far left search bar and drag result to the area of your choice on the application screen. ![image](https://user-images.githubusercontent.com/58155079/147894148-851e727e-ca62-4e54-9fd0-c910004ba45d.png)

3. Once you have this loaded, fill out your desired inputs and select save on the top right! ![image](https://user-images.githubusercontent.com/58155079/147894190-60cbb1a1-9203-4ce3-bf33-620aebb6ff34.png)
**Input Descriptions**
  Component Title - Title that displays at the header of your component. Example on screen is Dynamic Record Action
  Component Type - readonly / Edit - if you select readonly your fields will show in _read only mode_ and your users will not be able to edit these fields. If you select edit, your users can edit these fields. 
  Form Density - Comfy, Compact, Auto.
    Comfy: ![image](https://user-images.githubusercontent.com/58155079/147894277-f1ac5aba-3c05-4326-bcfc-bc0f8556dc37.png)
    Compact: ![image](https://user-images.githubusercontent.com/58155079/147894298-0abb7434-ea93-4ae0-9cf0-9f792f4f6e5b.png)
    Auto: Follows your users default system settings found in their user menu drop down. 

4. Complete! 

