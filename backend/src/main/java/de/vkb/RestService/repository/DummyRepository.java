package de.vkb.RestService.repository;

import de.vkb.RestService.domainmodel.entities.Dummy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DummyRepository extends JpaRepository<Dummy, Integer> {
}
