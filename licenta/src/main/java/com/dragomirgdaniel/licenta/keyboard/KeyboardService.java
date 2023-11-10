package com.dragomirgdaniel.licenta.keyboard;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KeyboardService {

    private final KeyboardRepository keyboardRepository;

    public KeyboardService(KeyboardRepository keyboardRepository) {
        this.keyboardRepository = keyboardRepository;
    }

    public List<Keyboard> findAll() {
        return keyboardRepository.findAll();
    }

    public <S extends Keyboard> S save(S entity) {
        return keyboardRepository.save(entity);
    }

    public Keyboard update(Keyboard entity, Integer idKeyboard) {
        Optional<Keyboard> keyboard = keyboardRepository.findById(idKeyboard);
        Optional<Keyboard> keyboard1 = keyboard.map(keyboard2 ->{
            keyboard2.setImage(entity.getImage());
            keyboard2.setStock(entity.getStock());
            keyboard2.setCategory(entity.getCategory());
            keyboard2.setPrice(entity.getPrice());
            keyboard2.setWarranty(entity.getWarranty());
            keyboard2.setName(entity.getName());
            keyboard2.setBrand(entity.getBrand());
            keyboard2.setType(entity.getType());
            keyboard2.setColor(entity.getColor());
            keyboard2.setNumberKeys(entity.getNumberKeys());
            keyboard2.setTechnology(entity.getTechnology());
            keyboard2.setSize(entity.getSize());
            keyboard2.setWeight(entity.getWeight());
            keyboard2.setKeyboardInterface(entity.getKeyboardInterface());
            keyboard2.setSoSystems(entity.getSoSystems());
            keyboard2.setPalmRest(entity.getPalmRest());
            keyboard2.setCharacteristics(entity.getCharacteristics());
            keyboard2.setLighting(entity.getLighting());
            keyboard2.setLayout(entity.getLayout());
            keyboard2.setOther(entity.getOther());
            return keyboard2;
        });
        return keyboardRepository.save(keyboard1.get());
    }

    public Optional<Keyboard> findById(Integer integer) {
        return keyboardRepository.findById(integer);
    }

    public void deleteById(Integer integer) {
        keyboardRepository.deleteById(integer);
    }

}
