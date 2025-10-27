import { useAuth } from "../hooks/useAuth";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return <div>Non connecté</div>;

  return (
    <main className="profile-container">
      <h2>Mon profil</h2>
      <div className="profile-info">
        <p><strong>Nom d'utilisateur :</strong> {user.username}</p>
      </div>
    </main>
  );
}