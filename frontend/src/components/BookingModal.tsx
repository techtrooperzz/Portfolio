/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { TechTrooperzzLogo } from './TechTrooperzzLogo';
import { sendEmail } from '../configAPI';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ModalStep = 'CALENDAR' | 'DETAILS' | 'SUCCESS';

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [remarks, setRemarks] = useState('');

    // Cal.com states
    const [step, setStep] = useState<ModalStep>('CALENDAR');
    const [viewDate, setViewDate] = useState<Date>(new Date(2026, 5, 1)); // Started viewing at June 2026
    const [selectedDateObj, setSelectedDateObj] = useState<Date>(new Date(2026, 5, 17)); // default selected: June 17, 2026

    const [selectedDate, setSelectedDate] = useState('Jun 17, 2026');
    const [selectedTime, setSelectedTime] = useState('02:30 PM PST');
    const [activeSlot, setActiveSlot] = useState<string | null>('02:30 PM');

    const [is24h, setIs24h] = useState(false);
    const [timezone, setTimezone] = useState('Asia/Kolkata');
    const [isSuccess, setIsSuccess] = useState(false);

    const [loading, setLoading] = useState(false);

    // Timezones definitions
    const timezones = [
        { name: 'Asia/Kolkata', label: 'Asia/Kolkata (IST)' },
        { name: 'America/New_York', label: 'America/New_York (EST)' },
        { name: 'Europe/London', label: 'Europe/London (GMT)' },
        { name: 'Europe/Paris', label: 'Europe/Paris (CET)' },
        { name: 'Asia/Singapore', label: 'Asia/Singapore (SGT)' },
        { name: 'Asia/Tokyo', label: 'Asia/Tokyo (JST)' },
    ];

    // Base slot choices
    const slotsBase = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
        '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
    ];

    useEffect(() => {
        if (isOpen) {
            // resets to default datepicker opening
            setStep('CALENDAR');
            setIsSuccess(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const bookingDetails = {
                email,
                name,
                date: selectedDate,
                time: selectedTime,
            };

            await sendEmail(bookingDetails);

            setStep("SUCCESS");
        } catch (err) {
            console.error("Booking failed:", err);
        }finally{
            setLoading(false);
        }
    };

    // Calendar logic helpers
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const handlePrevMonth = () => {
        setViewDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(year, month + 1, 1));
    };

    // June 2026 or any month calculations
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay(); // 0-indexed (0=Sun, 1=Mon, etc.)
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Create array of days for grid
    const daysArray: (Date | null)[] = [];
    // pre-padding
    for (let i = 0; i < startingDayOfWeek; i++) {
        daysArray.push(null);
    }
    // current month days
    for (let d = 1; d <= totalDays; d++) {
        daysArray.push(new Date(year, month, d));
    }

    // Today reference is fixed to June 16, 2026 for consistent staging
    const todayRef = new Date(2026, 5, 16);

    const isDayPast = (date: Date) => {
        const dClone = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const tClone = new Date(todayRef.getFullYear(), todayRef.getMonth(), todayRef.getDate());
        return dClone < tClone;
    };

    const isDaySelected = (date: Date) => {
        return (
            date.getDate() === selectedDateObj.getDate() &&
            date.getMonth() === selectedDateObj.getMonth() &&
            date.getFullYear() === selectedDateObj.getFullYear()
        );
    };

    // Convert slot names to display strings
    const formatSlot = (time12: string, is24: boolean) => {
        const parts = time12.split(' ');
        const [hoursStr, minutesStr] = parts[0].split(':');
        let hours = parseInt(hoursStr, 10);
        const ampm = parts[1];

        if (is24) {
            if (ampm === 'PM' && hours < 12) hours += 12;
            if (ampm === 'AM' && hours === 12) hours = 0;
            return `${hours.toString().padStart(2, '0')}:${minutesStr}`;
        } else {
            return `${hours}:${minutesStr} ${ampm.toLowerCase()}`;
        }
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setRemarks('');
        setSelectedDateObj(new Date(2026, 5, 17));
        setSelectedDate('Jun 17, 2026');
        setSelectedTime('02:30 PM PST');
        setActiveSlot('02:30 PM');
        setStep('CALENDAR');
        onClose();
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Selected date short styling, e.g. "Wed 17"
    const shortDaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const formattedHeaderDay = `${shortDaysOfWeek[selectedDateObj.getDay()]} ${selectedDateObj.getDate()}`;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className={`relative bg-brand-surface border border-brand-border w-full rounded-2xl z-10 text-left transform transition-all duration-300 shadow-2xl flex flex-col overflow-hidden ${step === 'CALENDAR'
                        ? 'max-w-[880px] md:h-[480px] md:max-h-[82vh]'
                        : step === 'DETAILS'
                            ? 'max-w-[440px]'
                            : 'max-w-[400px]'
                    }`}
            >
                {/* Close Button top-right */}
                <button
                    onClick={onClose}
                    className="absolute top-3.5 right-3.5 text-white/50 hover:text-white transition-colors z-20 p-1 bg-white/5 hover:bg-white/10 rounded-full"
                    aria-label="Close booking modal"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {step === 'CALENDAR' && (
                    /* Three Column Booking Interface matching Cal.com layout completely */
                    <div className="grid grid-cols-1 md:grid-cols-12 h-full overflow-y-auto md:overflow-hidden font-sans">
                        {/* Host info Column (Col-3) */}
                        <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-brand-border/60 p-4 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col space-y-2 mb-3.5">
                                    <div className="flex items-center">
                                        <TechTrooperzzLogo height={32} className="w-auto" />
                                    </div>
                                    <div className="text-[11px] font-bold text-violet-400 tracking-wider uppercase font-mono pl-1">
                                        Scoping Team
                                    </div>
                                </div>

                                <h3 className="text-lg font-serif text-white leading-tight font-medium mb-1.5">Alignment Call</h3>
                                <p className="text-[12px] text-brand-text-muted leading-relaxed mb-3">
                                    Book a quick session and we will discuss layout, visual architecture, scoping and tech choices for your next project.
                                </p>

                                {/* Meet attributes */}
                                <div className="space-y-2 pt-2.5 border-t border-brand-border/40">
                                    <div className="flex items-center text-white/85 text-[12px] font-medium">
                                        <svg className="w-3.5 h-3.5 text-brand-text-primary mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        <span>15m duration</span>
                                    </div>
                                    <div className="flex items-center text-white/85 text-[12px] font-medium">
                                        <svg className="w-3.5 h-3.5 text-brand-text-primary mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M23 7l-7 5 7 5V7z" />
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                        </svg>
                                        <span>Google Meet video link</span>
                                    </div>
                                </div>
                            </div>

                            {/* Timezone Switcher */}
                            <div className="mt-4 md:mt-0 pt-2.5 border-t border-brand-border/40">
                                <label htmlFor="timezone-select" className="block text-[9px] text-brand-text-muted font-bold font-mono tracking-wider uppercase mb-1">
                                    Select Timezone
                                </label>
                                <div className="relative">
                                    <select
                                        id="timezone-select"
                                        value={timezone}
                                        onChange={(e) => setTimezone(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-2 py-1 text-white text-xs focus:outline-none cursor-pointer transition-colors appearance-none font-medium pr-7"
                                    >
                                        {timezones.map(tz => (
                                            <option key={tz.name} value={tz.name} className="bg-[#121214] text-white">
                                                {tz.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-2 px-1 flex items-center justify-center text-white/60 pointer-events-none">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Calendar Grid Column (Col-5) */}
                        <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-brand-border/60 p-4 flex flex-col justify-between">
                            <div>
                                {/* Header Month / Year & Navigation */}
                                <div className="flex items-center justify-between mb-3.5">
                                    <h4 className="text-[14px] font-bold text-white font-mono tracking-wide">
                                        {monthNames[month]} <span className="text-white/50">{year}</span>
                                    </h4>
                                    <div className="flex items-center space-x-1">
                                        <button
                                            onClick={handlePrevMonth}
                                            className="p-1 hover:bg-white/5 text-white hover:text-white rounded-lg border border-brand-border/60 hover:border-white/20 transition-all cursor-pointer"
                                            aria-label="Previous month"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button
                                            onClick={handleNextMonth}
                                            className="p-1 hover:bg-white/5 text-white hover:text-white rounded-lg border border-brand-border/60 hover:border-white/20 transition-all cursor-pointer"
                                            aria-label="Next month"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Grid Header List */}
                                <div className="grid grid-cols-7 text-center text-[9px] text-white/40 font-bold font-mono tracking-wider uppercase mb-2">
                                    <span>Sun</span>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                </div>

                                {/* Calendar Days */}
                                <div className="grid grid-cols-7 gap-1" id="cal-days-grid">
                                    {daysArray.map((day, index) => {
                                        if (day === null) {
                                            return <div key={`empty-${index}`} />;
                                        }

                                        const past = isDayPast(day);
                                        const selected = isDaySelected(day);

                                        return (
                                            <button
                                                key={`day-${day.getDate()}`}
                                                type="button"
                                                disabled={past}
                                                onClick={() => {
                                                    setSelectedDateObj(day);
                                                    setActiveSlot(null); // Reset active confirm state
                                                }}
                                                className={`relative aspect-square flex flex-col items-center justify-center text-[12px] font-medium rounded-lg transition-all duration-150 border cursor-pointer ${past
                                                        ? 'bg-transparent border-transparent text-white/15 cursor-not-allowed'
                                                        : selected
                                                            ? 'bg-white border-white text-brand-dark font-bold scale-[1.05]'
                                                            : 'bg-white/5 border-transparent hover:border-white/20 text-white/90 hover:bg-white/10'
                                                    }`}
                                            >
                                                <span>{day.getDate()}</span>
                                                {/* Dot below date to indicate availability or presence */}
                                                {!past && (
                                                    <span className={`absolute bottom-1 w-[3px] h-[3px] rounded-full ${selected ? 'bg-brand-dark/85' : 'bg-brand-text-accent'}`} />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Sub-note */}
                            <div className="text-[10px] text-white/40 font-mono text-center mt-3">
                                All meeting slots are strictly scheduled online.
                            </div>
                        </div>

                        {/* Time Slot List Column (Col-4) */}
                        <div className="md:col-span-4 p-4 flex flex-col h-full overflow-hidden">
                            <div className="flex items-center justify-between mb-3 md:pr-10">
                                <h4 className="text-[13px] font-bold text-white font-mono uppercase tracking-wide">
                                    {formattedHeaderDay}
                                </h4>

                                {/* 12h/24h Toggle */}
                                <div className="flex items-center bg-white/5 border border-white/10 p-0.5 rounded-lg shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => setIs24h(false)}
                                        className={`text-[8px] font-bold font-mono px-1.5 py-0.5 rounded transition-all ${!is24h ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        12h
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIs24h(true)}
                                        className={`text-[8px] font-bold font-mono px-1.5 py-0.5 rounded transition-all ${is24h ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        24h
                                    </button>
                                </div>
                            </div>

                            {/* Scrollable grid list */}
                            <div className="grow overflow-y-auto space-y-1.5 pr-1 custom-scrollbar max-h-[280px] md:max-h-none">
                                {slotsBase.map(slot => {
                                    const label = formatSlot(slot, is24h);
                                    const isCurrentActive = activeSlot === slot;

                                    return (
                                        <div key={slot} className="flex gap-1 transition-all duration-200">
                                            <button
                                                type="button"
                                                onClick={() => setActiveSlot(slot)}
                                                className={`grow text-center text-xs font-mono font-medium py-2 border rounded-lg transition-all duration-150 cursor-pointer ${isCurrentActive
                                                        ? 'bg-white/10 border-white text-white font-semibold'
                                                        : 'bg-[#121214]/60 border-brand-border hover:border-white/30 text-white/80 hover:bg-[#121214]'
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                            {isCurrentActive && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedTime(formatSlot(slot, is24h));
                                                        // Format final human reading format date
                                                        const formattedDate = selectedDateObj.toLocaleDateString('en-US', {
                                                            weekday: 'short',
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        });
                                                        setSelectedDate(formattedDate);
                                                        setStep('DETAILS');
                                                    }}
                                                    className="bg-white text-black hover:bg-neutral-100 text-[11px] font-sans font-bold px-3 py-2 rounded-lg shrink-0 transition-all hover:scale-102 active:scale-95 duration-100 cursor-pointer shadow-lg shadow-black/40"
                                                >
                                                    Next
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {step === 'DETAILS' && (
                    /* Step 2: Input booking information & scoping requirements */
                    <div className="p-5 font-sans">
                        {/* Back Button */}
                        <button
                            onClick={() => setStep('CALENDAR')}
                            className="inline-flex items-center text-white/50 hover:text-white text-[10px] font-mono tracking-wider uppercase mb-3.5 transition-colors cursor-pointer"
                        >
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                            Back to Calendar
                        </button>

                        <h3 className="text-lg sm:text-xl font-serif text-white mb-1">Scoring Information</h3>
                        <p className="text-[12px] text-brand-text-muted mb-3.5 leading-relaxed">
                            Introduce your goals. You're booking a meeting on:
                        </p>

                        {/* Inline confirmation card */}
                        <div className="bg-white/5 border border-brand-border/60 rounded-xl p-3 mb-4 space-y-0.5">
                            <div className="flex items-center text-white/90 text-xs font-semibold">
                                <span className="text-brand-text-accent mr-1.5">✦</span>
                                <span>Alignment Call (15m)</span>
                            </div>
                            <div className="text-[11px] text-white/70 font-mono">
                                📅 {selectedDate}
                            </div>
                            <div className="text-[11px] text-white/70 font-mono">
                                ⏰ {selectedTime} ({timezone})
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            {/* Full Name */}
                            <div>
                                <label className="block text-white text-[9px] font-sans uppercase tracking-wider mb-1 font-bold">
                                    Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full bg-black/40 border border-brand-border rounded-xl px-2.5 py-2 text-white font-sans text-xs focus:outline-none focus:border-white/50 transition-colors"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-white text-[9px] font-sans uppercase tracking-wider mb-1 font-bold">
                                    Email Address
                                </label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    className="w-full bg-black/40 border border-brand-border rounded-xl px-2.5 py-2 text-white font-sans text-xs focus:outline-none focus:border-white/50 transition-colors"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full mt-1.5 bg-white text-black hover:bg-neutral-100 text-xs font-sans font-bold py-2.5 rounded-xl transition-all active:scale-95 duration-100 cursor-pointer shadow-xl shadow-white/5"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            className="w-4 h-4 animate-spin"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            />
                                        </svg>
                                        Sending...
                                    </div>
                                ) : (
                                    "Confirm Booking Schedule"
                                )}
                            </button>
                        </form>
                    </div>
                )}

                {step === 'SUCCESS' && (
                    /* Step 3: Success Confirmation Screen */
                    <div className="flex flex-col items-center justify-center text-center p-6 font-sans">
                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                            <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h4 className="text-[18px] font-serif text-white mb-1.5">Booking Confirmed!</h4>

                        <p className="text-brand-text-muted text-[12px] leading-relaxed max-w-[280px] mb-4">
                            Your alignment call with TechTrooperzz is locked in. We have registered:
                        </p>

                        <div className="bg-[#121214]/80 border border-brand-border/60 rounded-xl px-4 py-2.5 mb-5 text-left w-full space-y-1 text-xs">
                            <div className="text-white/90">
                                <span className="font-semibold text-white/50">Client:</span> {name}
                            </div>
                            <div className="text-white/90">
                                <span className="font-semibold text-white/50">Email:</span> {email}
                            </div>
                            <div className="text-white/90">
                                <span className="font-semibold text-white/50">Date:</span> {selectedDate}
                            </div>
                            <div className="text-[#a78bfa] font-bold font-mono text-[11px]">
                                📅 {selectedTime} {timezone}
                            </div>
                        </div>

                        <button
                            onClick={handleReset}
                            className="w-full bg-white text-black hover:bg-neutral-100 text-xs font-sans uppercase tracking-widest font-bold py-2.5 rounded-xl transition-all active:scale-95 duration-100 cursor-pointer"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
