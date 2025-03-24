package de.vkb.RestService.api;

import de.vkb.RestService.domainmodel.entities.Dummy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class DummyService {

    private List<Dummy> dummies = new ArrayList<>(List.of(
            new Dummy("Dummy 1", 21),
            new Dummy("Dummy 2", 23),
            new Dummy("Dummy 3", 25),
            new Dummy("Dummy 4", 27)
    ));

    public List<Dummy> getAll(){
        return dummies;
    }

    public String createDummy(Dummy dummy) {
        dummies.add(dummy);
        // Gib das Dummy-Objekt als String in der Konsole aus
        System.out.println("Empfangenes Dummy-Objekt: " + dummy.toString());
        return "Dummy '" + dummy.getName() + "' wurde erfolgreich gesendet!";
    }
}
