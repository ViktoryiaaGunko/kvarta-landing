import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export type LeadInterest = "subscription" | "order" | "question";

export type LeadData = {
    name: string;
    phone: string;
    interest: LeadInterest;
    comment: string;
};

export type LeadField = keyof LeadData;

type ValidationResult =
    | { success: true; data: LeadData }
    | { success: false; errors: Partial<Record<LeadField, string>> };

export function validateLead(input: unknown): ValidationResult {
    const source =
        typeof input === "object" && input !== null
            ? (input as Record<string, unknown>)
            : {};

    const name = typeof source.name === "string" ? source.name.trim() : "";
    const rawPhone = typeof source.phone === "string" ? source.phone.trim() : "";
    const interest = source.interest;
    const comment =
        typeof source.comment === "string" ? source.comment.trim() : "";

    const errors: Partial<Record<LeadField, string>> = {};

    if (!name || name.length > 100) {
        errors.name = "Введите имя — от 1 до 100 символов.";
    }

    const phone =
        rawPhone.length <= 40
            ? parsePhoneNumberFromString(rawPhone, {
                defaultCountry: "BY",
                extract: false,
            })
            : undefined;

    if (!phone || phone.country !== "BY" || !phone.isValid()) {
        errors.phone = "Введите корректный белорусский номер, например +375 29 123-45-67.";
    } else if (phone.ext) {
        errors.phone = "Введите номер без добавочного номера.";
    }

    if (
        interest !== "subscription" &&
        interest !== "order" &&
        interest !== "question"
    ) {
        errors.interest = "Выберите, что вас интересует.";
    }

    if (typeof source.comment !== "undefined" && typeof source.comment !== "string") {
        errors.comment = "Комментарий должен быть текстом.";
    } else if (comment.length > 2000) {
        errors.comment = "Сократите комментарий до 2000 символов.";
    }

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    return {
        success: true,
        data: {
            name,
            phone: phone!.number,
            interest: interest as LeadInterest,
            comment,
        },
    };
}