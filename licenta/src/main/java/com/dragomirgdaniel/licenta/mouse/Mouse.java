package com.dragomirgdaniel.licenta.mouse;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "mouse", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Mouse extends Product {


    @Column(name = "brand", nullable = false)
    private String brand;

    @Enumerated(EnumType.STRING)
    @Column(name = "technology", nullable = false)
    private Technology technology;

    @Enumerated(EnumType.STRING)
    @Column(name = "interface", nullable = false)
    private Interface mouseInterface;

    @Column(name = "sensor_type", nullable = false)
    private String sensorType;

    @Column(name = "maximum_resolution", nullable = false)
    private Integer maximumResolution;

    @Column(name = "number_buttons", nullable = false)
    private Integer numberButtons;

    @Column(name = "scroll_wheel", nullable = false)
    private Integer scrollWheel;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "size", nullable = false)
    private String size;

    @Column(name = "weight", nullable = false)
    private Integer weight;

    @Column(name = "supported_os", nullable = false)
    private String supportedOs;

    @Column(name = "other")
    private String other;

    public enum Technology {
        WIRELESS, WIRED, BOTH
    }

    public enum Interface {
        USB, BLUETOOTH, BOTH
    }

    @Override
    public String toString() {
        return "Mouse{" + super.toString()+
                ", brand='" + brand + '\'' +
                ", technology=" + technology +
                ", mouseInterface=" + mouseInterface +
                ", sensorType='" + sensorType + '\'' +
                ", maximumResolution=" + maximumResolution +
                ", numberButtons=" + numberButtons +
                ", scrollWheel=" + scrollWheel +
                ", color='" + color + '\'' +
                ", size='" + size + '\'' +
                ", weight=" + weight +
                ", supportedOs='" + supportedOs + '\'' +
                ", other='" + other + '\'' +
                '}';
    }
}
