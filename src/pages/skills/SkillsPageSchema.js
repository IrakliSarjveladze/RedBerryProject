import * as Yup from 'yup';

export const schema = Yup.object().shape({
    experience: Yup.string()
        .required('Required'),
});