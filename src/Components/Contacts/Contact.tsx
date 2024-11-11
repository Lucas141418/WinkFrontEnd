/* eslint-disable prettier/prettier */
import { FlatList, TextInput, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { Controller, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { contacts } from "../../constants";
import ContactRow from "./ContactRow";

type FormData = {
  contact: string;
};

export const ContactList = () => {
  const { control } = useForm<FormData>();
  const [contactSearch, setContactSearch] = useState<string>("");

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactSearch.toLowerCase()),
    );
  }, [contactSearch]);

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
              setContactSearch(text);
            }}
            value={value}
          />
        )}
      />

      <FlatList
        data={filteredContacts}
        renderItem={ContactRow}
        keyExtractor={(Contact) => Contact.id}
        ItemSeparatorComponent={() => <View style={AppStyles.ContactsRow} />}
      />
    </View>
  );
};
