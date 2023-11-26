import React from 'react';
import {
 Box,
 Flex,
 Stack,
 Button,
 Text,
 IconButton,
 Input,
 Select,
 VStack,
 Spacer,
 Link,
} from '@chakra-ui/react';
import { CloseIcon, CopyIcon } from '@chakra-ui/icons';

function App() {
 return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={5}
    >
      <Stack spacing={4} width="100%">
        <Text fontSize="lg" fontWeight="bold">
          Ingresa los detalles de tu evento
        </Text>
        <Box borderWidth="1px" rounded="lg" p={5} width="100%">
          <Stack spacing={4}>
            <Flex justifyContent="space-between">
              <Text>Título del evento</Text>
              <IconButton
                icon={<CloseIcon />}
                variant="ghost"
                colorScheme="red"
              />
            </Flex>
            <Input placeholder="Título del evento" />
            <Text>Fecha y hora del evento</Text>
            <Flex justifyContent="space-between">
              <Input type="date" />
              <Input type="time" />
            </Flex>
            <Text>Lugar del evento</Text>
            <Input placeholder="Lugar del evento" />
            <Text>Descripción del evento</Text>
            <Input placeholder="Descripción del evento" />
            <Text>URL de video</Text>
            <Input placeholder="URL de video" />
            <Text>Número máximo de participantes</Text>
            <Select placeholder="Selecciona un número">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <VStack align="start">
              <Text>Mensaje promocional (opcional)</Text>
              <Input placeholder="Mensaje promocional" />
            </VStack>
            <Spacer />
            <Button colorScheme="blue" width="100%">
              Crear evento
            </Button>
          </Stack>
        </Box>
        <Stack spacing={4} width="100%">
          <Text fontSize="lg" fontWeight="bold">
            Compartir el enlace del evento
          </Text>
          <Box borderWidth="1px" rounded="lg" p={5} width="100%">
            <Flex justifyContent="space-between">
              <Input value="https://example.com/evento" isReadOnly />
              <IconButton
                icon={<CopyIcon />}
                variant="ghost"
                colorScheme="green"
              />
            </Flex>
          </Box>
        </Stack>
      </Stack>
    </Flex>
 );
}

export default App;