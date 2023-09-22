import { h, useEffect } from 'preact';
import { createSignal, onCleanup } from 'preact-signal';

const SocialSharing = ({ container }) => {
  const [clicked, setClicked] = createSignal(false);

  useEffect(() => {
    const socialSharing = container.querySelector('.social-sharing');
    const socialSharingToggle = container.querySelector('.social-sharing__toggle');
    const linkList = container.querySelector('.social-sharing__item-list');

    const showSocialSharing = () => {
      socialSharing.classList.add('social-sharing--active');
      socialSharingToggle.setAttribute('aria-expanded', true);
      linkList.setAttribute('aria-hidden', false);
      enableTabbingOfChildren(linkList);
    };

    const hideSocialSharing = () => {
      socialSharing.classList.remove('social-sharing--active');
      socialSharingToggle.setAttribute('aria-expanded', false);
      linkList.setAttribute('aria-hidden', true);
      disableTabbingOfChildren(linkList);
    };

    const destroySocialSharing = () => {
      socialSharingToggle.removeEventListener('click', onClick);
    };

    const onClick = () => {
      if (socialSharingToggle.getAttribute('aria-expanded') === 'true') {
        hideSocialSharing();
      } else {
        showSocialSharing();
      }
    };

    socialSharingToggle.addEventListener('click', onClick);
    socialSharingToggle.addEventListener('click', () => setClicked(true));

    container.addEventListener('section_unload', destroySocialSharing);

    onCleanup(() => {
      container.removeEventListener('section_unload', destroySocialSharing);
    });
  }, [container]);

  return null; // or return JSX if you have content to render
};
