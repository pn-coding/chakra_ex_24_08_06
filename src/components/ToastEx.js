import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

export const ToastEx = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const onClick = () => {
    toast({
      title: "회원가입 되었습니다!",
      description: "로그인을 해보세요!!",
      status: "success",
      duration: "3000",
    });
  };

  return (
    <div>
      <Button bgColor={"blue.500"} onClick={onClick}>
        버튼을 눌러보세요~
      </Button>

      <Button onClick={onOpen}>구독할래?</Button>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>이 채널을 구독하겠습니까?</DrawerHeader>

          <DrawerBody>
            이 채널을 구독하면 여러 좋은 정보를 얻을수 있습니다
          </DrawerBody>

          <DrawerFooter>
            <Button variant={"outline"} mr={"5px"}>
              취소
            </Button>
            <Button bgColor={"red.700"}>구독</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
