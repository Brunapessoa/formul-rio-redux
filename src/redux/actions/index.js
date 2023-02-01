export const PERSONAL_FORM = 'PERSONAL_FORM';
export const PROFESSIONAL_FORM = 'PROFESSIONAL_FORM';

export const personalInfo = (name, value) => ({
  type: PERSONAL_FORM,
  name,
  value,
});

export const professionalInfo = (name, value) => ({
  type: PROFESSIONAL_FORM,
  name,
  value,
});

export default { PERSONAL_FORM, personalInfo, PROFESSIONAL_FORM, professionalInfo };
