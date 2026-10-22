package com.corco.corcoback.repository;

import com.corco.corcoback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Permet de chercher un utilisateur par son email pour la connexion
    Optional<User> findByEmail(String email);
}