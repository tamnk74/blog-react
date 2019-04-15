import { combineForms, createForms } from 'react-redux-form';

const initialPostState = {
  title: '',
  content: ''
};

const initForm = createForms({
  newPost: initialPostState,
});

export default initForm;