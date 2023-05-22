import styles from './input-text.module.scss';
import { useField } from 'formik';
interface InputTextProps {
  name:string
  placeholder?: string,
  type?: string
  search?: boolean
}

export const InputText:React.FC<InputTextProps> = ({
  name, placeholder, type = 'text', search
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={styles.content}>
      <button data-testid="search" type='submit' >
        <img src='/img/search-icon.svg' width={25} />
      </button>
      <input
        name={name}
        className={`${ styles.input } ${ search ? styles.inputSearch : '' }`}
        type={type}
        value={field.value}
        onChange={value => helpers.setValue(value.target.value)}
        placeholder={placeholder}
      />
      {
        meta.error && <span>{meta.error}</span>
      }
    </div>
  );
};
