import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";

import { styles } from "../components/styles";
import { Colores } from "../components/Colores";
import { Iconos } from "@/components/iconos";
import { Banner } from "@/components/Banner";
import { TarjetaExperiencias } from "@/components/TarjetaExperiencias";
import { experiencias } from "@/data/experiencias";
import { Footer } from "@/components/footer";

export default function Index() {

  const onContactoHandler = () => {
    console.log("mailto:nicolasisnardi@gmail.com");

    Linking.openURL("mailto:sofia.16d@gmail.com");
  };

  const renderExperiencias = () =>
    experiencias.map((experiencia, index) => {
      return (
        <TarjetaExperiencias
          key={`${index}-${experiencia.empresa}-${experiencia.posicion}`}
          logo={experiencia.logo}
          posicion={`Posición: ${experiencia.posicion}`}
          empresa={`Empresa: ${experiencia.empresa}`}
          fecha={`Fecha: ${experiencia.fecha}`}
          locacion={`Ubicación: ${experiencia.locacion}`}
          tecnologias={`Tecnologías: ${experiencia.tecnologias}`}
        />
      );
    });

  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Banner></Banner>
          <Image source={require('@/assets/images/foto carnet.png')} style={styles.logo}></Image>
          <Text style={[Colores.verDeclaro, styles.title]}>SOFÍA DELMONTE</Text>
          <Iconos onGithubPress={() =>
            Linking.openURL("https://github.com/verdeverdad")
          }
            onPortfolioPress={() =>
              Linking.openURL("https://verdeverdad.github.io/Portfolio/")
            }
            onAtPress={() =>
              Linking.openURL("mailto:sofia.16d@gmail.com")
            }
            onInstagramPress={() =>
              Linking.openURL("https://www.instagram.com/verde_verdad/")
            }
            onLinkedinPress={() =>
              Linking.openURL("https://www.linkedin.com/in/sdweb/")
            }

          ></Iconos>
        </View>
        <TouchableOpacity style={styles.boton} onPress={onContactoHandler}>
          <Text style={styles.textoBoton}>CONTACTO</Text>
        </TouchableOpacity>
        <View >
          <Text style={styles.experiencia}>Sobre mí</Text>

          <Text style={styles.bio}> Comencé mi camino en la programación,
            pero la necesidad de crear experiencias más completas y centradas en el usuario
            me llevó a sumergirme en el mundo del UX/UI. Hoy en día,
            estoy enamorada de ambos campos, combinando mis conocimientos
            técnicos con mi sensibilidad para la experiencia del usuario.
            Me dedico principalmente al diseño web ux/ui y
            a la programación front-end. Me encanta el proceso creativo de un producto,
            ver su evolución y trabajar para crear su mejor versión
            y cumplir con las necesidades del usuario</Text>
          <Text style={styles.experiencia}>Experiencias</Text>

          {renderExperiencias()}
          <Footer></Footer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

