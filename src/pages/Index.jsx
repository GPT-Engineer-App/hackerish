import { Box, Container, Heading, Text, Link, VStack, HStack, IconButton, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon, FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "React 18 Released - What's New?",
    url: "https://reactjs.org/blog/2022/03/29/react-v18.html",
    points: 387,
    author: "reactteam",
    time: "3 hours ago",
    comments: 42,
  },
  {
    id: 2,
    title: "Introducing the new MacBook Air with M2",
    url: "https://apple.com/macbook-air-m2",
    points: 299,
    author: "appleinsider",
    time: "1 day ago",
    comments: 99,
  },
  {
    id: 3,
    title: "Microsoft unveils Windows 12",
    url: "https://microsoft.com/windows-12",
    points: 528,
    author: "msdev",
    time: "5 hours ago",
    comments: 128,
  },
];

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.md" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading size="lg">Hacker News Clone</Heading>
        <IconButton icon={<SwitchIcon />} isRound={true} size="md" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <VStack spacing={4} align="stretch">
        {newsItems.map((item) => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bgColor} color={color}>
            <Heading fontSize="xl">
              <Link href={item.url} isExternal>
                {item.title}
              </Link>
            </Heading>
            <Text mt={2}>
              {item.points} points by {item.author} {item.time}
            </Text>
            <HStack spacing={4}>
              <HStack spacing={1}>
                <FaRegThumbsUp />
                <Text>{item.points}</Text>
              </HStack>
              <HStack spacing={1}>
                <FaRegCommentAlt />
                <Text>{item.comments} comments</Text>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
      <Box as="footer" py={5} textAlign="center" borderTop="1px" borderColor="gray.200" mt={10}>
        <Text fontSize="sm">&copy; 2024 Hacker News Clone. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
