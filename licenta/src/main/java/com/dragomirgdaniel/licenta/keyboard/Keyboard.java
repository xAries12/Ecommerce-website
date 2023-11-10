package com.dragomirgdaniel.licenta.keyboard;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "keyboard", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Keyboard extends Product{


    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "number_keys", nullable = false)
    private Boolean numberKeys;

    @Column(name = "technology", nullable = false)
    private String technology;

    @Column(name = "size", nullable = false)
    private String size;

    @Column(name = "weight", nullable = false)
    private String weight;

    @Enumerated(EnumType.STRING)
    @Column(name = "interface", nullable = false)
    private Interface keyboardInterface;

    @Column(name = "so_systems", nullable = false)
    private String soSystems;

    @Column(name = "palm_rest", nullable = false)
    private Boolean palmRest;

    @Column(name = "characteristics", nullable = false)
    private String characteristics;

    @Column(name = "lighting", nullable = false)
    private Boolean lighting;

    @Column(name = "layout", nullable = false)
    private String layout;

    @Column(name = "other", nullable = false)
    private String other;

    public enum Interface {
        USB, BLUETOOTH, BOTH
    }

    @Override
    public String toString() {
        return "Keyboard{" +super.toString()+
                ", brand='" + brand + '\'' +
                ", type='" + type + '\'' +
                ", color='" + color + '\'' +
                ", numberKeys=" + numberKeys +
                ", technology='" + technology + '\'' +
                ", size='" + size + '\'' +
                ", weight='" + weight + '\'' +
                ", keyboardInterface=" + keyboardInterface +
                ", soSystems='" + soSystems + '\'' +
                ", palmRest=" + palmRest +
                ", characteristics='" + characteristics + '\'' +
                ", lighting=" + lighting +
                ", layout='" + layout + '\'' +
                ", other='" + other + '\'' +
                '}';
    }
}
