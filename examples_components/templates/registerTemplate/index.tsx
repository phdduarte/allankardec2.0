import React, { useState } from "react"
// import { Container, Form } from "reactstrap";
// import useAuth from '../../../services/auth';
// import {useRouter} from 'next/router';

// // organisms

// import Head from "../../organisms/head";
// import Hero from "../../organisms/hero";
// import Header from "../../organisms/header";

// import { Button} from "react-bootstrap"
// import {
//     Input,
//     FormControl,
//     FormLabel,
//     Stack,
//     useToast,
// } from "@chakra-ui/core"

// type Props = {
//     titlePage: string
//     // logo
//     urlLogo?: string
//     altLogo?: string
//     widthLogo?: string
//     heightLogo?: string
//     // hero
//     titleHero: string
//     subTitleHero: string
// }

// const RegisterTemplate = ({
//     titlePage,
//     // hero
//     titleHero,
//     subTitleHero,
// }: Props) => {
//     const auth = useAuth();
//     const toast = useToast();
//     const router = useRouter();
//     const [email, setEmail] = useState('')
//     const [pass, setPass] = useState('')
//     const [name, setName] = useState('')

//     const signUp = (email, pass, name) => {
//         auth.signup(email, pass, name)
//             .then(() => {
//                 toast({
//                     title: 'Success! 🍻',
//                     description: 'Sua conta foi criada com sucesso.',
//                     status: 'success',
//                     duration: 3000,
//                     isClosable: true
//                 });
//                 router.push('/minha-conta');
//             })
//             .catch((error) => {
//                 toast({
//                     title: 'Tivemos um erro ao criar sua conta.',
//                     description: error.message,
//                     status: 'error',
//                     duration: 9000,
//                     isClosable: true
//                 });
//             });
//     };
//     return (
//         <>
//             <Head titlePage={titlePage} />
//             <Header />
//             <Hero
//                 titleHero={titleHero}
//                 subTitleHero={subTitleHero}
//             />
//             <Container className="py-4">
//                 <Form>
//                     <FormControl isRequired className="py-4">
//                         <FormLabel htmlFor="name" className="text-primary font-weight-bold">Seu nome completo</FormLabel>
//                         <Input
//                             onChange={(e) => setName(e.target.value)}
//                             type="text"
//                             id="name"
//                             value={name}
//                             aria-describedby="name-helper-text"
//                             placeholder="Nome e sobrenome"
//                         />
//                     </FormControl>
//                     <FormControl isRequired className="pb-4">
//                         <FormLabel htmlFor="email" className="text-primary font-weight-bold">Seu melhor e-mail</FormLabel>
//                         <Input
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             id="emailAddress"
//                             value={email}
//                             aria-describedby="email-helper-text"
//                             placeholder="seunome@dominio.com.br"
//                         />
//                     </FormControl>
//                     <FormControl isRequired>
//                         <FormLabel htmlFor="password" className="text-primary font-weight-bold">Escolha uma senha</FormLabel>
//                         <Input
//                             onChange={(e) => setPass(e.target.value)}
//                             type="password"
//                             id="pass"
//                             value={pass}
//                             aria-describedby="password-helper-text"
//                             placeholder="**********"
//                         />
//                     </FormControl>
//                     <Stack justify="center" mt={6} isInline spacing={10}>
//                         <Button
//                             variant="solid"
//                             className="w-25 btn btn-primary badge-pill bg-primary text-uppercase font-weight-bold"
//                             disabled={email === "" || pass === "" || name === ""}
//                             onClick={() => signUp(email, pass, name)}
//                         >
//                             Finalizar
//                         </Button>
//                     </Stack>
//                 </Form>
//             </Container>
//         </>
//     )
// }

// export default RegisterTemplate
