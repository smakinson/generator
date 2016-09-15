module.exports = `/*

  CUSTOM MEDIA QUERIES

  Media query values can be changed to fit your own content.
  There are no magic bullets when it comes to media query width values.
  They should be declared in em units - and they should be set to meet
  the needs of your content. You can also add additional media queries,
  or remove some of the existing ones.

  These media queries can be referenced like so:

  @media (--breakpoint-not-small) {
    .medium-and-larger-specific-style {
      background-color: red;
    }
  }

  @media (--breakpoint-medium) {
    .medium-screen-specific-style {
      background-color: red;
    }
  }

  @media (--breakpoint-large) {
    .large-and-larger-screen-specific-style {
      background-color: red;
    }
  }

*/

/* Media Queries */
@custom-media --breakpoint-not-small screen and (min-width: 30em);
@custom-media --breakpoint-medium screen and (min-width: 30em) and (max-width: 60em);
@custom-media --breakpoint-large screen and (min-width: 60em);`
