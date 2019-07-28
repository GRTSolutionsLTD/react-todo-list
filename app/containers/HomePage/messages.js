/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This app help you to manage all your tasks in one place(just keep your head clean...) and keep aware of what was done already or what need to be done immediately.',
  },
});
