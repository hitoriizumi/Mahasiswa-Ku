import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils/localStorage";

export const registerUser = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

    const dataBaru = {
      ...data,
      uid: success.user.uid,
    };

    await FIREBASE.database()
      .ref("users/" + success.user.uid)
      .set(dataBaru);
    //Local storage(Async Storage)
    storeData("user", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
    const resDB = await FIREBASE.database()
      .ref("/users/" + success.user.uid)
      .once("value");

    if (resDB.val()) {
      // Local storage (Async Storage)
      await storeData("user", resDB.val());
      return resDB.val();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage();
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};

export const registerAdmin = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

    const adminData = {
      ...data,
      uid: success.user.uid,
      isAdmin: true, // Tandai sebagai admin
    };

    await FIREBASE.database()
      .ref("admins/" + success.user.uid) // Simpan di jalur admins/
      .set(adminData);

    // Simpan data admin ke Local Storage (Async Storage)
    storeData("admin", adminData);

    return adminData;
  } catch (error) {
    throw error;
  }
};

export const loginAdmin = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
    const adminRef = await FIREBASE.database()
      .ref("/admins/" + success.user.uid)
      .once("value");

    if (adminRef.val()) {
      // Simpan data admin ke Local Storage (Async Storage)
      await storeData("admin", adminRef.val());
      return adminRef.val();
    } else {
      throw new Error("Admin data not found");
    }
  } catch (error) {
    throw error;
  }
};

export const logoutAdmin = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage(); // Hapus data admin dari Local Storage
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};

export const addCompany = async (data) => {
  try {
    const adminData = await getData("admin");

    if (adminData) {
      const dataBaru = {
        ...data,
        uid: adminData.uid,
      };

      // Simpan perusahaan di bawah semua admin
      const allAdminsRef = FIREBASE.database().ref("admins");
      const snapshot = await allAdminsRef.once("value");
      const allAdmins = snapshot.val();

      if (allAdmins) {
        Object.keys(allAdmins).forEach(async (adminUid) => {
          await FIREBASE.database()
            .ref(`companys/${adminUid}`)
            .push(dataBaru);
        });
      }

      console.log("Company added successfully");
    } else {
      throw new Error("Admin not logged in");
    }
  } catch (error) {
    throw error;
  }
};

export const getCompany = async () => {
  try {
    // Ambil referensi dari semua admin
    const allAdminsRef = FIREBASE.database().ref("admins");
    const adminsSnapshot = await allAdminsRef.once("value");
    const allAdmins = adminsSnapshot.val();

    // Ambil referensi dari semua users
    const allUsersRef = FIREBASE.database().ref("users");
    const usersSnapshot = await allUsersRef.once("value");
    const allUsers = usersSnapshot.val();

    const allCompanies = [];

    // Ambil data perusahaan dari setiap admin
    if (allAdmins) {
      for (const adminUid in allAdmins) {
        const companysRef = FIREBASE.database().ref(`companys/${adminUid}`);
        const snapshot = await companysRef.once("value");
        const companysData = snapshot.val();

        if (companysData) {
          Object.keys(companysData).forEach((companyId) => {
            const company = {
              companyId,
              ...companysData[companyId],
            };
            allCompanies.push(company);
          });
        }
      }
    }

    // Ambil data perusahaan dari setiap user
    if (allUsers) {
      for (const userUid in allUsers) {
        const userCompanysRef = FIREBASE.database().ref(`user_companys/${userUid}`);
        const snapshot = await userCompanysRef.once("value");
        const userCompanysData = snapshot.val();

        if (userCompanysData) {
          Object.keys(userCompanysData).forEach((companyId) => {
            const company = {
              companyId,
              ...userCompanysData[companyId],
            };
            allCompanies.push(company);
          });
        }
      }
    }

    return allCompanies;
  } catch (error) {
    throw error;
  }
};


export const editCompany = async (companyId, updatedData) => {
  try {
    const adminData = await getData("admin");

    if (adminData) {
      const allAdminsRef = FIREBASE.database().ref("admins");
      const snapshot = await allAdminsRef.once("value");
      const allAdmins = snapshot.val();

      if (allAdmins) {
        Object.keys(allAdmins).forEach(async (adminUid) => {
          const companyRef = FIREBASE.database().ref(`companys/${adminUid}/${companyId}`);
          const snapshot = await companyRef.once("value");
          const existingCompany = snapshot.val();

          if (existingCompany) {
            const updatedCompany = {
              ...existingCompany,
              ...updatedData,
            };

            await companyRef.update(updatedCompany);
            console.log("Company updated successfully");
          } else {
            console.log("Company not found");
          }
        });
      }
    } else {
      throw new Error("Admin not logged in");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteCompany = async (companyId) => {
  try {
    const adminData = await getData("admin");

    if (adminData) {
      const allAdminsRef = FIREBASE.database().ref("admins");
      const snapshot = await allAdminsRef.once("value");
      const allAdmins = snapshot.val();

      if (allAdmins) {
        Object.keys(allAdmins).forEach(async (adminUid) => {
          const companyRef = FIREBASE.database().ref(`companys/${adminUid}/${companyId}`);
          const snapshot = await companyRef.once("value");
          const existingCompany = snapshot.val();

          if (existingCompany) {
            await companyRef.remove();
            console.log("Company deleted successfully");
          } else {
            console.log("Company not found");
          }
        });
      }
    } else {
      throw new Error("Admin not logged in");
    }
  } catch (error) {
    throw error;
  }
};

export const addForm = async (data) => {
  try {
    const userData = await getData("user");

    if (userData) {
      const dataBaru = {
        ...data,
        uid: userData.uid, // Gunakan UID pengguna untuk form
      };

      await FIREBASE.database()
        .ref("forms/" + userData.uid) // Simpan di jalur forms/user_uid
        .push(dataBaru);

      console.log("Form added successfully");
    } else {
      Alert.alert("Error", "Login Terlebih Dahulu");
    }
  } catch (error) {
    throw error;
  }
};

export const getForm = async () => {
  try {
    // Ambil data admin yang sudah login
    const adminData = await getData("admin");
    
    if (adminData) {
      const formsRef = FIREBASE.database().ref("forms");

      return formsRef
        .once("value")
        .then((snapshot) => {
          const formsData = snapshot.val();
          if (formsData) {
            const allForms = [];
            // Loop melalui setiap UID pengguna
            Object.keys(formsData).forEach((userId) => {
              const formsArray = Object.entries(formsData[userId]).map(([formId, formData]) => ({
                formId,
                ...formData,
                userId, // Sertakan ID pengguna dalam data formulir
              }));
              allForms.push(...formsArray);
            });
            return allForms;
          } else {
            return [];
          }
        })
        .catch((error) => {
          console.error("Error fetching forms:", error);
          return [];
        });
    } else {
      throw new Error("Admin not logged in");
    }
  } catch (error) {
    throw error;
  }
};