package com.dragomirgdaniel.licenta.ram_memory;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "ram_memory", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class RamMemory extends Product {

    @Column(name = "series", nullable = false)
    private String series;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "frequency", nullable = false)
    private Integer frequency;

    @Column(name = "lighting", nullable = false)
    private Boolean lighting;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "other")
    private String other;

    @Override
    public String toString() {
        return "RamMemory{" +super.toString()+
                ", series='" + series + '\'' +
                ", type='" + type + '\'' +
                ", capacity=" + capacity +
                ", frequency=" + frequency +
                ", lighting=" + lighting +
                ", color='" + color + '\'' +
                ", other='" + other + '\'' +
                '}';
    }
}
