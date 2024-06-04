// src/components/RegisterPDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#000',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    borderBottom: '1px solid #000',
    paddingBottom: 5,
  },
  subheading: {
    fontSize: 14,
    marginBottom: 10,
    borderBottom: '1px solid #000',
    paddingBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  label: {
    fontSize: 10,
    color: '#555',
  },
  value: {
    fontSize: 12,
    color: '#000',
  },
});

const RegisterPDF = ({ register }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Register</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Origen</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>ID</Text>
            <Text style={styles.value}>{register.id}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Origen</Text>
            <Text style={styles.value}>{register.origen}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>CP Origen</Text>
            <Text style={styles.value}>{register.cp_origen}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Direccion Origen</Text>
            <Text style={styles.value}>{register.direccion_origen}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Destino</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Destino</Text>
            <Text style={styles.value}>{register.destino}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>CP Destino</Text>
            <Text style={styles.value}>{register.cp_destino}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Direccion Destino</Text>
            <Text style={styles.value}>{register.direccion_destino}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Detalles de la Unidad</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Unidad</Text>
            <Text style={styles.value}>{register.unidad}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Peso</Text>
            <Text style={styles.value}>{register.peso} kg</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Dimensiones</Text>
            <Text style={styles.value}>{register.dimensiones} m</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Cantidad de Skids</Text>
            <Text style={styles.value}>{register.cantidad_skids}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default RegisterPDF;
