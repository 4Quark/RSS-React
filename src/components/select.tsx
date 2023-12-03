import { LegacyRef, forwardRef } from 'react';

const Select = forwardRef(
  ({ list, defaultValue }: { list: string[]; defaultValue: string }, ref: LegacyRef<HTMLSelectElement>) => (
    <label>
      Choose your country
      <select ref={ref} defaultValue={defaultValue}>
        {list.length &&
          list.map((item: string, i: number) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
      </select>
    </label>
  )
);

export default Select;
