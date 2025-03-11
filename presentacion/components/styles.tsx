import { StyleSheet } from "react-native";
import { Colores } from "./Colores";

export const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#31294d",
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:
  {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20
  },

  banner: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: -90,
    overflow: 'hidden',
    backgroundColor: "#6dd7b8"
  },

  contenedorDeIconos: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 20
  },

  boton: {
    flex: 1, justifyContent: "center", alignItems: "center", margin: 15
  },

  textoBoton: {
    fontSize: 20,
    backgroundColor: "#31294d",
    color: "#6dd7b8",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 40,
    shadowColor: '#000', // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.90, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5,
  },

  bio: {
    margin: 20,
    fontSize: 12,
    lineHeight: 18,
    color: "#31294d"
  },

  experiencia: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
    backgroundColor: "#31294d",
    color: "#2cc08a",
    paddingVertical:20,
  },

  contenedorExperiencia: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#31294d"
  },

  imgExperiencia: {
    width: 100,
    height: 100
  },

  textoExperiencias: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
    color: "#6dd7b8"

  },

  posición: {
    fontWeight: "bold", fontSize: 14, color: "#6dd7b8"

  },

  empresa: {
    fontSize: 12, lineHeight: 18, color: "#6dd7b8"

  },
  fecha: {
    fontSize: 12, lineHeight: 18, color: "#b6def8"

  },

  ubicación: {
    fontSize: 12, color: "#b6def8"
    , lineHeight: 18, marginBottom: 10
  },

  tecnologías: {
    fontSize: 12, fontWeight: "bold", lineHeight: 18, color: "#b6def8"

  },

});
