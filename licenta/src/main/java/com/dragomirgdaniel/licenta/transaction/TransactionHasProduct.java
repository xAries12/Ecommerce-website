package com.dragomirgdaniel.licenta.transaction;
import com.dragomirgdaniel.licenta.product.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "transaction_has_product", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionHasProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_has_product_id", nullable = false)
    private Integer transactionHasProductId;

    @Column(name = "product_idp", nullable = false)
    private Integer productId;

    @ManyToOne
    @JsonIgnoreProperties("transactionHasProducts")
    @JoinColumn(name = "transaction_idtransaction", referencedColumnName = "idtransaction")
    private Transaction transaction;

    @Column(name = "count", nullable = false)
    private Integer count;

    @Column(name = "price", nullable = false)
    private Float price;
}