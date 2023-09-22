const selectors = {
  socialSharing: '.social-sharing',
  socialSharingToggle: '.social-sharing__toggle',
  linkList: '.social-sharing__item-list',
};

const classes = {
  socialSharingAction: 'social-sharing--active',
};

export const socialSharing = {
  init() {
    this.$elements = $(selectors.socialSharing, this.$container);

    this.clicked = false;

    $(selectors.socialSharingToggle, this.$container)
      .on('click', this._onClick.bind(this))

      .one('click', () => {
        this.clicked = true;
      });

    this.$container.on('section_unload', this.destroySocialSharing.bind(this));
  },

  showSocialSharing() {
    $(selectors.socialSharing, this.$container).addClass(classes.socialSharingAction);

    $(selectors.socialSharingToggle, this.$container).attr('aria-expanded', true);

    $(selectors.linkList, this.$container).attr('aria-hidden', false);

    utils.enableTabbingOfChildren($(selectors.linkList, this.$container));
  },

  hideSocialSharing() {
    $(selectors.socialSharing, this.$container).removeClass(classes.socialSharingAction);

    $(selectors.socialSharingToggle, this.$container).attr('aria-expanded', false);

    $(selectors.linkList, this.$container).attr('aria-hidden', true);

    utils.disableTabbingOfChildren($(selectors.linkList, this.$container));
  },

  destroySocialSharing() {
    $(selectors.socialSharingToggle, this.$container).off();
  },

  _onClick(evt) {
    if ($(evt.currentTarget).attr('aria-expanded') === 'true') {
      this.hideSocialSharing();
    } else {
      this.showSocialSharing();
    }
  },
};
