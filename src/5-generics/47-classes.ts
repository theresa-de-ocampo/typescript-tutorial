// Define generic type parameters
class KeyValuePair<T_Key, T_Value> {
  constructor(public key: T_Key, public value: T_Value) {}
}

let pair = new KeyValuePair<number, string>(1, 'Teriz')
