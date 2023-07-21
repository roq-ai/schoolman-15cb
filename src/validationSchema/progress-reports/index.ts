import * as yup from 'yup';

export const progressReportValidationSchema = yup.object().shape({
  report: yup.string().required(),
  student_id: yup.string().nullable().required(),
});
