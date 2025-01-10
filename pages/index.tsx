import styles from '../pages/index.module.css'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";

type ButtonType = "default" | "primary" | "secondary" | "success" | "warning" | "danger" ;
export default function Home() {
  const [selectedColor, setSelectedColor] = useState<ButtonType>('default');
  
  const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
  // Función para cambiar el tipo de botón
  const changeButtonType = (event:string) => {
    const value = event as ButtonType; // Aserción de tipo
    setSelectedColor(value);
  };
  return (
    <div className={styles.container}>
  <div className={styles.contTable}>
      <Table
        aria-label="Example static collection table"
        color={selectedColor}
        defaultSelectedKeys={["2", "3"]}
        disabledKeys={["1", ]}
        selectionMode="multiple"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <RadioGroup
        label="Selection color"
        orientation="horizontal"
        value={selectedColor}
        onValueChange={changeButtonType}
      >
        {colors.map((color) => (
          <Radio key={color} className="capitalize" color={selectedColor} value={color}>
            {color}
          </Radio>
        ))}
      </RadioGroup>
    </div>
    </div>
  );
}
