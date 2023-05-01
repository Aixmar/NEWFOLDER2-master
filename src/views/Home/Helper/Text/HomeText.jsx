import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const TextHome = () => {
  const [textColor, setTextColor] = useState("");

  return (
    <Box fontSize={{base:'2.2em', md:"4.5em"}} color={textColor}>
      <TypeAnimation
        sequence={[
          // Same string at the start will only be typed once, initially
          "If you can image it ...",
          2000,
          "I can create it!",
          2000,
          "Programming is an art form ...",
          2000,
          "Programming is",
          750,
          () => setTextColor("#EC7063"),
          `Programming is m`,
          190,
          () => setTextColor("#0074D9"),
          "Programming is ma",
          190,
          () => setTextColor("#2ECC40"),
          "Programming is mag",
          190,
          () => setTextColor("#FFDC00"),
          "Programming is magi",
          190,
          () => setTextColor("#B10DC9"),
          "Programming is magic",
          190,
        //   () => setTextColor("#FF851B"),
        //   "Programar es mágico",
        //   190,
          () => setTextColor("#EC7063"),
          "Programming is magic",
          3500,
        //   () => setTextColor(""),
          // () => setTextSize("35px"),
        ]}
        speed={50}
        repeat={Infinity}
        deletionSpeed={80}
      />
    </Box>
  );
};

export default TextHome;