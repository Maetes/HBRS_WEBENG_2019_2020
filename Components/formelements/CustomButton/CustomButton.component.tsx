import styles from './CustomButton.module.css';

interface Props {
  children: string;
  type: 'submit' | 'reset' | 'button';
  value: string;
  click?: Function;
  disabled?: boolean;
  classItems?: string;
}

const CustomButton = ({
  children,
  type,
  click,
  disabled,
  classItems,
  value,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${classItems ? classItems : ''} ${
        disabled ? styles.disabled : ''
      }`}
      type={type}
      onClick={click ? (d) => click(d) : undefined}
      disabled={disabled}
      value={value}
    >
      {children}
    </button>
  );
};

export default CustomButton;
