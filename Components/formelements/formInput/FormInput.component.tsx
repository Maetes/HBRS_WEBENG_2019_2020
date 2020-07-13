import styles from './FormInput.module.css';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
  value: string;
  type?: string;
  required?: boolean;
  name?: string;
}

const FormInput = ({ handleChange, label, error, ...otherProps }: Props) => {
  return (
    <div className={styles.group}>
      <input
        className={`${styles.formInput} ${error ? styles.error : ''}`}
        onChange={handleChange}
        {...otherProps}
        autoComplete='on'
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? styles.shrink : ''} ${
            styles.formInputLabel
          } ${error ? styles.errorLabel : ''}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
