import Input from "../styled/Input";
import useDebouncedCallback from "../hooks/useDebouncedCallback";
export const SearchInput = ({ onChangeDebounce, delay = 500, ...props }) => {
  const debounced = useDebouncedCallback((value) => {
    onChangeDebounce(value);
  }, delay);

  const onChange = (e) => {
    props?.onChange?.(e);
    debounced(e.target.value);
  };

  return <Input {...props} onChange={onChange} />;
};

export default SearchInput;
