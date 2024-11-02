import { Select } from "antd";
import { YearSelectorProps } from "./yearSelect.types";
import styles from "./yearSelect.module.css";

const YearSelector: React.FC<YearSelectorProps> = ({
  year,
  handleYearChange,
}) => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const years = []; // Create an array to hold year options

  // Generate an array of year options (e.g., last 10 years)
  for (let i = currentYear; i >= currentYear - 10; i--) {
    years.push({ value: i, label: i.toString() }); // Push year to the options array
  }

  return (
    <div className={styles.select_container}>
      <p>เลือกปี:</p>
      <Select
        defaultValue={year}
        style={{ width: 200, height: 40 }}
        onChange={(e) => handleYearChange(e)} // Update to handle year change
        options={years} // Use the generated years array for options
      />
    </div>
  );
};

export default YearSelector;
