import { Text, Group } from "@mantine/core";
export default function Footer({ year, fullName, studentId, courseName }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {fullName} {studentId} {year} {courseName}
      </Text>
    </Group>
  );
}
