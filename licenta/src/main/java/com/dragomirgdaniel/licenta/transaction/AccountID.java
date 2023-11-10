package com.dragomirgdaniel.licenta.transaction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountID {
    Integer idAccount;
    String address;
    Float totalPrice;
}
