/* eslint-disable prettier/prettier */
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import { Controller, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import {  Link } from "expo-router";
import { Contact } from "../types";
import {contacts} from "../constants"



type FormData = {
  contact: string;
};



export const ContactList = () => {
  const { control } = useForm<FormData>();
  const [conctactSearch, setConctactSearch] = useState<string>("");

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(conctactSearch.toLowerCase()),
    );
  }, [conctactSearch]);

  const renderContact = ({ item }: { item: Contact }) => {
    return (
      <Link
        asChild
        href={{
          pathname: "/SinpeScreen", 
          params: {
            id: item.id,
            name: item.name,
            phoneNumber: item.phoneNumber,
            initials: item.initials,
          }
        }}
        key={item.id}
      >
        <TouchableOpacity style={AppStyles.contactItem}>
          <View style={AppStyles.contactInitialsContainer}>
            <Text style={AppStyles.contactInitials}>{item.initials}</Text>
          </View>
          <View style={AppStyles.contactDetails}>
            <Text style={AppStyles.contactName}>{item.name}</Text>
            <Text style={AppStyles.contactPhone}>{item.phoneNumber}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <Controller
        name="contact"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={AppStyles.searchInput}
            placeholder="Buscá por nombre"
            keyboardType="default"
            onBlur={onBlur}
            onChangeText={(text) => {
              onChange(text);
              setConctactSearch(text);
            }}
            value={value}
          />
        )}
      />

      <FlatList
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={AppStyles.separatorContacts} />
        )}
      />
      {filteredContacts.length <= 0 && (
        <Text style={AppStyles.errorText}> El contacto no se encuentra</Text>
      )}
    </View>
  );
};
