# Changelog

## 1.3.9

- Add bulk multi state multiplier tool

## 1.3.8

- Add clone answer button

## 1.3.7

- Add fallback if PV predict fails (still need to fix)

## 1.3.6

- Add PV predictor

## 1.3.5

- Clean up sidebar to fit closer together
- Add "Add State" button as requested by S4M.

## 1.3.4

- Make it so the issue field in issue answer effect is a dropdown instead.

## 1.3.3

- Added button to clone questions easily. Clones answers, feedback, etc.

## 1.3.2

- Added option to autosave every 15 seconds. When autosave is on everytime you reload the page it will try to reload the last autosave you have.

## 1.3.1

- Added bulk state multipliers tool

## 1.3.0

- Added bulk issue score changing for one value in bulk tools

## 1.2.9

- Added ability to change all state issue scores for an issue from the issue screen.

## 1.2.8

- Added issue and issue stance description support.

## 1.2.7

- Added bulk state score tool

## 1.2.6

- Made sure initial values for answer effects were real PKs to avoid invalid PKs.

## 1.2.5

- Added ability to add/delete candidates


## 1.2.4

- Fixed bug where you can't use ']' in questions

## 1.2.3

- Fixed map preview updating

## 1.2.2

- Added ability to scale map SVGs.

## 1.2.1

- Added first version of custom map preview. You still need to click in and out to view the preview.

## 1.2.0

- Added first version of automatic custom map making from SVG import.
    - It deletes all states and things to do with states.
    - Reads svg paths and uses their ids as names.
    - Creates new candidate state multipliers and state issue scores automatically.
    - May not work with all SVGs, but confirmed to work with the few I tested.
    - If you want you can just upload a dummy code 2 and then use the tool and still code the rest manually. It should save you time.
    - If your map is weirdly sized, then resize the SVG in Inkscape or something.

## 1.1.9

- Added ability to delete states.

## 1.1.8

- Added state dropdown for state answer effects to make it easier.

## 1.1.7

- Added ability to add (basic) custom endings/code generation. You can choose from 3 variable and 3 operators.
  
## 1.1.6

- Added ability to change the lower banner image/names easily.
    - Kind of janky, need to go in and out to see image changes. But overall works.

## 1.1.5

- Fix glitchy number entry bug

## 1.1.4

- Added copy code 2 to clipboard option

## 1.1.3

- Added a list of templates from the base scenarios so people can easily load in base Code 2 files.

## 1.1.2

- Added ability to have code the persists between files.
    - Code must have a //#startcode before it.
    - Code must have a //#endcode after it.
    - There can only be one instance of those tags in your code.
    - Example:

        //#startcode
        console.log("Hello World");
        //#endcode


## 1.1.1

- Made it so imported JSON is sanitized for numbers, so cannot have NaN errors.
- Made it so when you input text it tries to convert to number when possible!
- Thanks Astro! 

## 1.1.0

- Added warning on import if duplicate PKs are found (Thanks Astro!)
- Changed the state issue score issue pk to be a dropdown menu

## 1.0.9

- Fixed horrible bug where question/answer fields would be reset upon adding!

## 1.0.8

- Changed questions to use Map instead to preserve question ordering

## 1.0.7

- Added CYOA supprt
- CYOA support does not import CYOA data from existing mods, only those made with Jet's TCT Mod Tool

## 1.0.6

- Added ability to add/delete questions!

## 1.0.5

- Added state PK field to answer state score (oops)

## 1.0.4

- Fixed new line import error for some code 2 files

## 1.0.3

- Added ability to nickname candidates and have their name show next to their pk in editor
- Started saving/loading of jet_data, so the editor can save some data with the files and save state inbetween.

## 1.0.2

- We now gracefully handle missing parts of json

## 1.0.1

- Made homepage look a bit nicer
- Added version and change log

## 1.0.0

- First released!
- Removed Herobrine