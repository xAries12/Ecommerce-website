package com.dragomirgdaniel.licenta.headset;

import com.dragomirgdaniel.licenta.product.Product;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "headset", catalog = "store_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name = "product_idp")
public class Headset extends Product {

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "technology", nullable = false)
    private String technology;

    @Column(name = "sound", nullable = false)
    private String sound;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "sensitivity", nullable = false)
    private String sensitivity;

    @Column(name = "response", nullable = false)
    private String response;

    @Column(name = "microphone_noise_cancelling", nullable = false)
    private Boolean microphoneNoiseCancelling;

    @Column(name = "compatibility", nullable = false)
    private String compatibility;

    @Column(name = "connectivity", nullable = false)
    private String connectivity;

    @Column(name = "light", nullable = false)
    private Boolean light;

    @Column(name = "other", nullable = false)
    private String other;

    @Override
    public String toString() {
        return "Headset{" +super.toString()+
                ", brand='" + brand + '\'' +
                ", technology='" + technology + '\'' +
                ", sound='" + sound + '\'' +
                ", type='" + type + '\'' +
                ", sensitivity='" + sensitivity + '\'' +
                ", response='" + response + '\'' +
                ", microphoneNoiseCancelling=" + microphoneNoiseCancelling +
                ", compatibility='" + compatibility + '\'' +
                ", connectivity='" + connectivity + '\'' +
                ", light=" + light +
                ", other='" + other + '\'' +
                '}';
    }
}
