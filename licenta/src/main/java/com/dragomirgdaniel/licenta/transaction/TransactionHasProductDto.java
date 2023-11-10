package com.dragomirgdaniel.licenta.transaction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionHasProductDto {
    private Integer idProduct;
    private Integer idTransaction;
    private Integer count;
}
