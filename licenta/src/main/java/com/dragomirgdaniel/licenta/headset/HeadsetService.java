package com.dragomirgdaniel.licenta.headset;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HeadsetService {

    private final HeadsetRepository headsetRepository;

    public HeadsetService(HeadsetRepository headsetRepository) {
        this.headsetRepository = headsetRepository;
    }

    public List<Headset> findAll() {
        return headsetRepository.findAll();
    }

    public <S extends Headset> S save(S entity) {
        return headsetRepository.save(entity);
    }

    public void update(Headset entity,Integer idHeadset) {
        Optional<Headset> headset = headsetRepository.findById(idHeadset);
        Optional<Headset> headset1 = headset.map(headset2 -> {
            headset2.setImage(entity.getImage());
            headset2.setStock(entity.getStock());
            headset2.setCategory(entity.getCategory());
            headset2.setPrice(entity.getPrice());
            headset2.setWarranty(entity.getWarranty());
            headset2.setName(entity.getName());
            headset2.setBrand(entity.getBrand());
            headset2.setTechnology(entity.getTechnology());
            headset2.setSound(entity.getSound());
            headset2.setType(entity.getType());
            headset2.setSensitivity(entity.getSensitivity());
            headset2.setResponse(entity.getResponse());
            headset2.setMicrophoneNoiseCancelling(entity.getMicrophoneNoiseCancelling());
            headset2.setCompatibility(entity.getCompatibility());
            headset2.setLight(entity.getLight());
            headset2.setOther(entity.getOther());
            return headset2;
        });

        headsetRepository.save(headset1.get());
    }

    public Optional<Headset> findById(Integer integer) {
        return headsetRepository.findById(integer);
    }

    public void deleteById(Integer integer) {
        headsetRepository.deleteById(integer);
    }
}
