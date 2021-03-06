## [1.1.9] - 13/12/21
### Changes
- update to Next 12
- added google script for AdSense

## [1.1.8] - 5/9/21
### Changes
- more mobile tweaks. scroll snap on scroll containers.

## [1.1.7] - 5/9/21
### Changes
- tweak postcard sizing for mobile
  
## [1.1.6] - 5/9/21
### Changes
- better horizontal scroll solution for blog section.
- videos rows scroll switched to grid, too.

## [1.1.5] - 3/9/21
### Changes
- 1.1.4 didn't work! Trying different approach that doesn't use any clip-path

## [1.1.4] - 3/9/21
### Changes
- remove background colour from nav when closed as it isn't clipping in older browsers (iOS 11)
- changes hero image from png to webp resulting in 80% reduction in file size! 588kb vs 118kb

### Fixes
- nav bug on older versions of Safari. Thanks to Barb in Oz reporting it

### Added
- aria labels to buttons
- roles to sections of the pages for screen readers

## [1.1.3] - 28/8/21
### Added
- Author name to blog posts.

## [1.1.2] - 26/8/21
### Changed
- swap getServerSideProps for getStaticProps so blog and videos pages are static, not server generated. Noticed some 504 errors on those pages as they are having to wait for Heroku to spin up and render the page!
- 
## [1.1.1] - 26/8/21
### Changed
- order of blog posts

### Added
- Link to Ornate frame component
## [1.1.0] - 18/8/21
### Changes
- Full website live!


## [1.1.0-16] - 18/8/21
### Fixes
- page titles being wrong
  
## [1.1.0-15] - 18/8/21
### Added
- preview mode for previewing draft videos and blog articles


## [1.1.0-14] - 16/8/21
### Changes
- intro section using css background gradient
- shadow to sidenav
- scrollbar color
- video rows spacing
  
### Fixes
- fix embed for hero video


## [1.1.0-13] - 16/8/21
### Fixes
- made slant svgs responsive
- 

## [1.1.0-12] - 15/8/21
### Fixes
- right button on video row

### Added
- horse and chair svg

### Changed
- cast intro section, swapped text with video page.

## [1.1.0-11] - 14/8/21
### Fixes
- more mobile layout

## [1.1.0-10] - 13/8/21
### Changes
- uniform colours on header and footer throughout
- copy on footer buttons (more cta)

### Fixes
- Blog layout

## [1.1.0-9] - 13/8/21
### Fixes
- Responsive layout

## [1.1.0-8] - 13/8/21
### Added
- Characters page quotes

### Fixed
- bug that was breaking the build: Ensure google font weights are in ascending order when importing them!

## [1.1.0-7] - 12/8/21
### Added
- comments functionality using Hyvor talk to videos and blog posts
- blog section
- about page
  
## [1.1.0-6] - 11/8/21
### Fixed
- cushion overlapping footer video row
- 

## [1.1.0-5] - 10/8/21
### Added
- Front-end styling looking good
- Embedded vimeo video for hero video

## [1.1.0-4] - 04/8/21
### Added
- Videos horizontal scroll component
- Markdown JSX for video transcript markdown to display properly

### Removed
- nav temporarily as interferes with videos row

## [0.0.9-0] - 25/7/21
### Added
- footer component
- nav component
- videos row component
- button component
- hero component
- video player component
- landing page
- home page
- sorted videos queries for video rows

## [0.0.8-0] - 25/7/21
### Added
- characters homepage
- characters detail page
- videos homepage
- videos detail page

- figured out static props hook for SSG pages.
