import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export interface Experiencia {
    logo: string;
    posicion: string;
    empresa: string;
    fecha: string;
    locacion: string;
    tecnologias: string;
  }

   export const TarjetaExperiencias = ({
    logo,
    posicion,
    empresa,
    fecha,
    locacion,
    tecnologias,}: Experiencia) => {
     return <View>
        <View style={styles.contenedorExperiencia}>
            <Image source={{uri: logo}} style={styles.imgExperiencia}></Image>
            <View style={styles.textoExperiencias}>
                <Text style={styles.posición}>{posicion}</Text>
                <Text style={styles.empresa}>{empresa}</Text>
                <Text style={styles.fecha}>{fecha} </Text>
                <Text style={styles.ubicación}>{locacion}</Text>
                <Text style={styles.tecnologías}>{tecnologias}</Text>
            </View>
        </View>
    </View>;
   
};