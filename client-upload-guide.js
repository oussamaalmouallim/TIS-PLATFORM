function loadUploadDownloadGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Upload et download de projets</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> La sauvegarde et le transfert de vos projets sont essentiels pour sécuriser votre configuration et permettre la maintenance à distance de votre installation.
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="import_export.png" alt="Import/Export" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Principes fondamentaux</h4>
                    <p>Le système TIS vous permet de :</p>
                    <ul>
                        <li><strong>Sauvegarder</strong> vos projets localement ou sur le cloud</li>
                        <li><strong>Restaurer</strong> des configurations antérieures</li>
                        <li><strong>Transférer</strong> des projets entre différents appareils</li>
                        <li><strong>Partager</strong> des configurations avec d'autres utilisateurs</li>
                        <li><strong>Cloner</strong> des projets pour créer des variantes</li>
                    </ul>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Types de transferts disponibles</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-cloud-upload-alt text-primary"></i> Upload vers le cloud</h5>
                                    <p>Sauvegarde du projet sur les serveurs TIS</p>
                                    <ul>
                                        <li>Sécurité maximale des données</li>
                                        <li>Accessible partout</li>
                                        <li>Historique des versions</li>
                                        <li>Nécessite un compte TIS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-file-export text-primary"></i> Export local</h5>
                                    <p>Sauvegarde sur votre appareil</p>
                                    <ul>
                                        <li>Fichier au format .tisproject</li>
                                        <li>Indépendant d'une connexion internet</li>
                                        <li>Transfert manuel possible (email, USB)</li>
                                        <li>Sécurité dépendant de votre appareil</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-exchange-alt text-primary"></i> Synchronisation directe</h5>
                                    <p>Transfert entre appareils ou modules</p>
                                    <ul>
                                        <li>Connexion WiFi ou Bluetooth</li>
                                        <li>Transfert en temps réel</li>
                                        <li>Idéal pour mises à jour rapides</li>
                                        <li>Nécessite proximité physique</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Upload d'un projet vers le cloud</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Étapes détaillées</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Ouvrez votre projet dans l'application</li>
                                <li>Accédez au menu principal puis sélectionnez "Paramètres du projet"</li>
                                <li>Dans la section "Sauvegarde", choisissez "Upload vers le cloud"</li>
                                <li>Si vous n'êtes pas déjà connecté, l'application vous demandera vos identifiants TIS</li>
                                <li>Options de sauvegarde :
                                    <ul>
                                        <li>Version complète (recommandé)</li>
                                        <li>Sans historique (plus rapide)</li>
                                        <li>Configuration uniquement (sans images ni plans)</li>
                                    </ul>
                                </li>
                                <li>Ajoutez un commentaire décrivant les modifications apportées</li>
                                <li>Choisissez la visibilité : "Privé", "Partagé" ou "Public"</li>
                                <li>Appuyez sur "Upload"</li>
                                <li>Une barre de progression indiquera l'avancement du transfert</li>
                            </ol>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-info-circle"></i> <strong>Astuce :</strong> Activez l'option "Sauvegarde automatique" pour que l'application uploade régulièrement votre projet sans intervention manuelle.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Download d'un projet depuis le cloud</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Récupération d'un projet</h4>
                        </div>
                        <div class="card-body">
                            <h5>Depuis un nouvel appareil</h5>
                            <ol>
                                <li>Installez l'application TIS et connectez-vous à votre compte</li>
                                <li>Sur l'écran d'accueil, sélectionnez "Mes projets cloud"</li>
                                <li>Choisissez le projet à télécharger</li>
                                <li>Sélectionnez la version (la plus récente par défaut)</li>
                                <li>Appuyez sur "Télécharger"</li>
                                <li>Attendez la fin du téléchargement</li>
                                <li>Ouvrez le projet et vérifiez que tout est correctement importé</li>
                            </ol>
                            
                            <h5 class="mt-4">Restauration d'une version antérieure</h5>
                            <ol>
                                <li>Dans votre projet actuel, accédez à "Paramètres" puis "Historique des versions"</li>
                                <li>Parcourez les différentes versions (date, heure, commentaires)</li>
                                <li>Sélectionnez la version à restaurer</li>
                                <li>Choisissez entre :
                                    <ul>
                                        <li>"Prévisualiser" (ouvre la version sans remplacer l'actuelle)</li>
                                        <li>"Restaurer" (remplace complètement la version actuelle)</li>
                                        <li>"Fusionner" (intègre certains éléments sélectionnés)</li>
                                    </ul>
                                </li>
                            </ol>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention :</strong> La restauration d'une version antérieure remplacera définitivement votre configuration actuelle. Envisagez de créer une sauvegarde avant cette opération.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Export et import local</h3>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Export local d'un projet</h4>
                    <ol>
                        <li>Ouvrez votre projet dans l'application</li>
                        <li>Accédez au menu "Fichier" puis "Exporter"</li>
                        <li>Choisissez le format d'export :
                            <ul>
                                <li>.tisproject (format complet)</li>
                                <li>.tisbackup (sauvegarde chiffrée)</li>
                                <li>.tisconfig (configuration uniquement)</li>
                            </ul>
                        </li>
                        <li>Sélectionnez l'emplacement de sauvegarde sur votre appareil</li>
                        <li>Ajoutez un mot de passe si vous souhaitez protéger votre fichier (recommandé)</li>
                        <li>Appuyez sur "Exporter" pour générer le fichier</li>
                    </ol>
                </div>
                <div class="col-md-6">
                    <h4>Import local d'un projet</h4>
                    <ol>
                        <li>Dans l'application, sélectionnez "Importer un projet"</li>
                        <li>Naviguez jusqu'à l'emplacement du fichier .tisproject, .tisbackup ou .tisconfig</li>
                        <li>Sélectionnez le fichier à importer</li>
                        <li>Si le fichier est protégé par mot de passe, saisissez-le</li>
                        <li>Choisissez les options d'import :
                            <ul>
                                <li>"Nouveau projet" (crée un projet distinct)</li>
                                <li>"Remplacer existant" (si vous mettez à jour)</li>
                                <li>"Fusionner" (combine avec un projet existant)</li>
                            </ul>
                        </li>
                        <li>Confirmez l'opération</li>
                    </ol>
                </div>
            </div>
            
            <div class="alert alert-success mb-4">
                <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Créez un système de nommage cohérent pour vos fichiers d'export, incluant la date et une brève description (ex: "MaisonPrincipale_20230615_AvantVacances.tisproject").
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Synchronisation directe entre appareils</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Transfert rapide</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Depuis l'application mobile vers la tablette</h5>
                                    <ol>
                                        <li>Sur l'appareil source, ouvrez le projet</li>
                                        <li>Accédez à "Partage" puis "Synchronisation directe"</li>
                                        <li>L'application recherchera les appareils compatibles à proximité</li>
                                        <li>Sélectionnez l'appareil de destination</li>
                                        <li>Sur l'appareil de destination, acceptez la demande de synchronisation</li>
                                        <li>Choisissez les éléments à synchroniser</li>
                                        <li>Lancez la synchronisation et attendez qu'elle se termine</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Synchronisation avec le contrôleur TIS</h5>
                                    <ol>
                                        <li>Connectez-vous au réseau WiFi du contrôleur ou via USB</li>
                                        <li>Dans l'application, accédez à "Outils" puis "Synchronisation contrôleur"</li>
                                        <li>L'application détectera automatiquement le contrôleur</li>
                                        <li>Choisissez la direction de synchronisation :
                                            <ul>
                                                <li>"Upload vers contrôleur" (app → contrôleur)</li>
                                                <li>"Download depuis contrôleur" (contrôleur → app)</li>
                                                <li>"Synchronisation bidirectionnelle"</li>
                                            </ul>
                                        </li>
                                        <li>Lancez la synchronisation</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-info-circle"></i> <strong>Remarque :</strong> La synchronisation directe est particulièrement utile pour les mises à jour rapides sur site, sans nécessiter de connexion internet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Gestion des conflits et résolution des problèmes</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h4>Résolution des conflits</h4>
                                    <p>Lors de la synchronisation ou de l'import, des conflits peuvent survenir :</p>
                                    <ul>
                                        <li><strong>Conflit de version</strong> : Plusieurs modifications d'un même élément
                                            <ul>
                                                <li>L'application vous proposera de choisir quelle version conserver</li>
                                                <li>Vous pourrez comparer les différences</li>
                                                <li>Option "Conserver les deux" disponible</li>
                                            </ul>
                                        </li>
                                        <li><strong>Équipements manquants</strong> : Référence à des éléments absents
                                            <ul>
                                                <li>L'application signalera les éléments manquants</li>
                                                <li>Vous pourrez ignorer, supprimer les références ou créer les éléments</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h4>Problèmes courants</h4>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Problème</th>
                                                <th>Solution</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Échec d'upload</td>
                                                <td>Vérifiez votre connexion internet et réessayez. Si le problème persiste, essayez un export local.</td>
                                            </tr>
                                            <tr>
                                                <td>Fichier corrompu</td>
                                                <td>Utilisez une sauvegarde antérieure. L'application crée automatiquement des points de restauration.</td>
                                            </tr>
                                            <tr>
                                                <td>Synchronisation incomplète</td>
                                                <td>Assurez-vous que les deux appareils restent à proximité. Recommencez avec moins d'éléments à la fois.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous maîtrisez maintenant les fonctionnalités d'upload et download de votre système TIS.
            </div>
            <p>N'oubliez pas de sauvegarder régulièrement votre configuration pour protéger votre travail.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le guide complet de sauvegarde et restauration</a>
        </div>
    `;
}

