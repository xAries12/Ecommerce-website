package com.dragomirgdaniel.licenta.ssd;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "ssd", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Ssd extends Product {

    @Enumerated(EnumType.STRING)
    @Column(name = "type_ssd", nullable = false)
    private TypeSSD typeSsd;

    @Column(name = "series", nullable = false)
    private String series;

    @Column(name = "form_factor", nullable = false)
    private String formFactor;

    @Column(name = "interface", nullable = false)
    private String interfaceType;

    @Column(name = "nvme_support", nullable = false)
    private Boolean nvmeSupport;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "max_reading", nullable = false)
    private Integer maxReading;

    @Column(name = "max_write", nullable = false)
    private Integer maxWrite;

    @Column(name = "other")
    private String other;

    public enum TypeSSD{
        Intern, Extern
    }

    @Override
    public String toString() {
        return "Ssd{" + super.toString()+
                ", typeSsd=" + typeSsd +
                ", series='" + series + '\'' +
                ", formFactor='" + formFactor + '\'' +
                ", interfaceType='" + interfaceType + '\'' +
                ", nvmeSupport=" + nvmeSupport +
                ", capacity=" + capacity +
                ", maxReading=" + maxReading +
                ", maxWrite=" + maxWrite +
                ", other='" + other + '\'' +
                '}';
    }
}
